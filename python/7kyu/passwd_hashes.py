"""
Desc: 
Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.

Remember that you can include the builtin require() function to include external modules (you're not expected to implement MD5 hash algorithm yourself, there are many modules that can do that for you).
"""

const crypto = require('crypto');

function passHash(str) {
    return crypto.createHash('md5').update(str).digest('hex')
}
