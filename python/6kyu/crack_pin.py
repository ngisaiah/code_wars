'''
DESC:
Given is a md5 hash of a five digits long PIN. It is given as string. Md5 is a function to hash your password: "password123" ===> "482c811da5d5b4bc6d497ffa98491e38"

Why is this useful? Hash functions like md5 can create a hash from string in a short time and it is impossible to find out the password, if you only got the hash. The only way is cracking it, means try every combination, hash it and compare it with the hash you want to crack. (There are also other ways of attacking md5 but that's another story) Every Website and OS is storing their passwords as hashes, so if a hacker gets access to the database, he can do nothing, as long the password is safe enough.
'''

const crypto = require('crypto');

function crack(hash) {
    // Iterate through all possible 5-digit numbers (00000 to 99999)
    for (let i = 0; i <= 99999; i++) {
        // Format the number to be a 5-digit string 
        let pin = i.toString().padStart(5, '0');
        
        // Calculate the MD5 hash of the current PIN using CryptoJS
        let hashedPin = crypto.createHash('md5').update(pin).digest('hex')

        // Check if the generated hash matches the target hash
        if (hashedPin === hash) {
            return pin;
        }
    }
    return null; // Return null if no match is found
}
