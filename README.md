i2DX-DP
=======

i2DX is a web-based IIDX controller for iPad.
The Original is One night project 2011-10-04. Forked by grgr-dkrk at 2024-03-20.

This is a modification for playing beatmania IIDX INFINITAS in Double Play mode. It requires two iPads for the keypads and two tablets or smartphones for the scratch controls.
This works on Windows and Mac M1, if use Mac, I only guarantee the operation of BMS.

This has no affiliation with the beatmania IIDX INFINITAS.

--------------

It uses the following technologies:

* [WebSocket](http://websocket.org/)
* Python __3.11__
	* [Tornado Web Server](http://www.tornadoweb.org/)
* [pynput](https://github.com/moses-palmer/pynput) 


How it works
------------

The server serves the file to the device's web browser, which connects back to
the server via WebSocket and send the press / release events.

__On Windows & Mac__: The WebSocket server then use pynput to press the keys.

The Controllers
---------------

- 1p/2p Controller
- 1p/2p Scratch

Setup
-----

* Windows/Mac
* 2 iPads for the keypads
* 2 tablets or smartphones for the scratch controls
* A working WiFi connection (may or may not have internet access. In my opinion, ad-hoc is the best)


Server Instructions
-------------------------------------------------

Download this project, then install __Python__ from [python.org](http://python.org/download/). I use Python 3.11 as of time of writing.

Then download and install [__pynput__](https://github.com/moses-palmer/pynput).

Go to the __server__ directory and run __server-main.py__.

Now navigate your client to the the server (see __Client Instructions__ below).
Try pressing some keys, it should type something on your keyboard.

With that set, open your game and map the pressed key to the corresponding input!


Client Instructions
-------------------

Use your device's web browser to navigate to

    http://[your ip]:9876/

You will see a launcher. Set the settings and click Launch i2DX.

If everything works correctly, then it should say "Ready" at the top left corner.


Hard Mode
---------

In normal mode, you can slide between buttons.
On real machines / controllers, you might not be able to do that, so in hard
mode, you cannot slide between buttons.



Keyboard maps
-----------------------

* `z`: Key 1
* `s`: Key 2
* `x`: Key 3
* `d`: Key 4
* `c`: Key 5
* `f`: Key 6
* `v`: Key 7
* `b`: Key 8
* `h`: Key 9
* `n`: Key 10
* `j`: Key 11
* `m`: Key 12
* `k`: Key 13
* `,`: Key 14
* `[`: 1P Scratch Up
* `]`: 1P Scratch Down
* `@`: 2P Scratch Up
* `:`: 2P Scratch Down

You can change key mappings in `server\config.ini`.

On INFINITAS
-----------------------
In the keyboard settings for INFINITAS, the scratch is assigned to the `shift` key and the `ctrl` key. In this library, considering the overhead when converting the keymap, `[` and `]` are assigned to the 1p side, and `@` and `:` are assigned to the 2p side. Please change the settings of INFINITAS accordingly.
