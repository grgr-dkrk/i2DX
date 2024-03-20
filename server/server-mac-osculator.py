import libi2dx
from pythonosc import udp_client, osc_message_builder

client = udp_client.UDPClient('127.0.0.1', 9000)
class I2DXWebSocketOSC(libi2dx.I2DXWebSocket):
    def toggle_key(self, key_id, state, player):
        msg = osc_message_builder.OscMessageBuilder(f'/player{player}/{key_id}')
        if state:
            state = 1.0
        else:
            state = 0.0
        msg.add_arg(state)
        try:
            client.send(msg.build())
        except osc_message_builder.BuildError:
            print("cannot send OSC message")

if __name__ == "__main__":
    libi2dx.serve(I2DXWebSocketOSC)