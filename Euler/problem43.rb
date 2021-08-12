# The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

# Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

# d2d3d4=406 is divisible by 2
# d3d4d5=063 is divisible by 3
# d4d5d6=635 is divisible by 5
# d5d6d7=357 is divisible by 7
# d6d7d8=572 is divisible by 11
# d7d8d9=728 is divisible by 13
# d8d9d10=289 is divisible by 17
# Find the sum of all 0 to 9 pandigital numbers with this property.

#instead of brute forcing I can generate all possible 3 digit multiples of each prime number.
#Then I could make sure that the second and third digits of one number match the first and second of the next.
#The only candidates that I'd choose from each number would be ones who themselves have non-repeating numbers.
#turn the numbers into an array
#concat the last digit of the next three digit number onto the target (completed) array
#if ever a push causes a repeated element to the target array then we reject that condiadate.
#If we've looped through all candidates and all cause a repeat then restart the entire process.

#have a hash that has as a key the first two digitis, then has as values as the last digit

#start with [0,1,2], we want to look at the threes that start with [1,2]. Then loop through the last digits.
#As long as the last digit IS NOT in the target array, then shovel it on then move to next prime.

def pandigital
    twos = Hash.new { |h, k| h[k] = Array.new };
    threes = Hash.new { |h, k| h[k] = Array.new };
    fives = Hash.new { |h, k| h[k] = Array.new };
    sevens = Hash.new { |h, k| h[k] = Array.new };
    elevens = Hash.new { |h, k| h[k] = Array.new };
    thirteens = Hash.new { |h, k| h[k] = Array.new };
    seventeens = [];

    (12..987).each do |el| #must create candidates starting with 012
        num = non_repeating(el); #num is my array (or false depending on return value of helper)
        if num  #begin the filter
            if el % 2 == 0
                twos[num[1..2]] << num[0]
            end
            if el % 3 == 0
                threes[num[1..2]] << num[0]
            end
            if el % 5 == 0
                fives[num[1..2]] << num[0]
            end
            if el % 7 == 0
                sevens[num[1..2]] << num[0]
            end
            if el % 11 == 0
                elevens[num[1..2]] << num[0]
            end
            if el % 13 == 0
                thirteens[num[1..2]] << num[0] #the first 2 digits of my 17s is the last two digits of my 13..
            end
            if el % 17 == 0
                seventeens << num #I'd run a lot faster if I ran through the 17s array and went backward.
            end
        end
    end

    p "twos: #{twos}"
    p "threes: #{threes}"
    p "fives: #{fives}"
    p "sevens: #{sevens}"
    p "elevens: #{elevens}"
    p "thirteens: #{thirteens}"
    p "seventeens: #{seventeens}"
    p " "
    p " "
    primes = [thirteens, elevens, sevens, fives, threes, twos]
    
    candidates = seventeens.clone;

    #simply loop through primes array on this end and reset candidates rejecting all who don't meet criteria
    primes.each do |prime|
        candidates = next_digit(candidates, prime)
    end

    candidates.each do |c| #loop through candidates and an array of all digits finding the one it doesn't already include then add to the front
        [0,1,2,3,4,5,6,7,8,9].each do |d|
            if !c.include?(d)
                c.unshift(d)
            end
        end
    end
    candidates.each { |c| p c }
    sum = 0
    candidates.each do |c| #sum up all of the candidates
        sum += c.join("").to_i
    end

    sum
end
#takes in the target array, and the current prime hash
def next_digit(candidates, prime)
    arr = [];
    candidates.each do |c| #c is my list of non-repeating digits
        l2 = c[0..1]; #l2 is my last 2 digits
        if prime.has_key?(l2) #I store the last two digits as keys in the hash so I check if it exists
            #now I need to loop through the arrays of first digits
            prime[l2].each do |f1| #f1 is the first digit
                if !c.include?(f1) #if my current candidate doesn't include that digit
                    new_c = [f1] + c #then add that digit to the front of it
                    arr << new_c #then shovel into my return array
                end
            end
        end
    end
    p arr
    p "___"
    arr
end

def non_repeating(num)
    arr = [];
    num_clone = num.clone
    while num >= 1
        n = num % 10;
        if arr.include?(n)
            return false
        else
            arr.unshift(n);
            num /= 10;
        end
    end
    if num_clone < 100
        if arr.include?(0)
            return false
        else
            arr.unshift(0)
        end
    end
    arr
end

p pandigital