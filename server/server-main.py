import sys
import libi2dx
from os import path
from pynput import keyboard
from configparser import NoOptionError

controller= keyboard.Controller()


class I2DXWebSocketAutoPy(libi2dx.I2DXWebSocket):
	def toggle_key(self, key_id, state, player):
		try:
			if state == True:
				controller.press(libi2dx.config.get('keymap_player%s' % player, key_id))
			else:
				controller.release(libi2dx.config.get('keymap_player%s' % player, key_id))
		except NoOptionError:
			print("key map not found for %s, player %s" % (key_id, player))

if __name__ == "__main__":
	libi2dx.serve(I2DXWebSocketAutoPy)
