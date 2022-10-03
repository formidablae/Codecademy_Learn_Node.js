#!/bin/bash

node message-mixer.js caesar 4

node message-mixer.js reverse

node message-mixer.js caesar 4

node super-encoder.js encode

node super-encoder.js decode
