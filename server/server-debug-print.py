
import libi2dx

class I2DXWebSocketOSC(libi2dx.I2DXWebSocket):
	def toggle_key(self, key_id, state, player):
		print(f'key {key_id} {state} player {player}')

if __name__ == "__main__":
	libi2dx.serve(I2DXWebSocketOSC)

