class Tv():
    def __init__(self, size):
        self._volume = 50
        self._channel = 1
        self.size = size
        self._power = False

    def volume_up(self):
        if self._volume <= 99:
            self._volume += 1

    def volume_down(self):
        if self._volume > 0:
            self._volume -= 1

    def switch_channel(self, channel):
        if type(channel) is not int or 0 <= channel >= 100:
            raise ValueError('Don`t have this channel')
        elif self._channel == channel:
            print('You are already on this channel')
        else:
            self._channel = channel

    def power(self):
        if self._power == False:
            self._power = True
        else:
            self._power = False

tv = Tv(50)
tv.switch_channel(5)
