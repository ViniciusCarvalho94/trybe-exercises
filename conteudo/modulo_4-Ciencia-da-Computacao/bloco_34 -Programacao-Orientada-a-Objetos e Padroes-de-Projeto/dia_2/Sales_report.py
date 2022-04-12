from email import header
import json
import csv
from abc import ABC, abstractmethod


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file + '.csv', 'w') as file:
            csv_writer = csv.DictWriter(file, fieldnames=["Coluna 1", "Coluna 2", "Coluna 3"])
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)


SalesReportJSON('report').serialize()
SalesReportCSV('report').serialize()         
