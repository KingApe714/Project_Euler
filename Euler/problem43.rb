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

#


def pandigital
    two = [];
    three = Hash.new { |h, k| h[k] = Array.new };
    five = Hash.new { |h, k| h[k] = Array.new };
    seven = Hash.new { |h, k| h[k] = Array.new };
    eleven = Hash.new { |h, k| h[k] = Array.new };
    thirteen = Hash.new { |h, k| h[k] = Array.new };
    seventeen = Hash.new { |h, k| h[k] = Array.new };

    targets = []; #this will hold all of the arrays that make it through the entire process.

    (12..987).each do |el| #must create candidates starting with 012
        num = non_repeating(el); #num is my array.
        if num
            if el % 2 == 0
                two << num
            end
            if el % 3 == 0
                three[num[0..1]] << num[2]
            end
            if el % 5 == 0
                five[num[0..1]] << num[2]
            end
            if el % 7 == 0
                seven[num[0..1]] << num[2]
            end
            if el % 11 == 0
                eleven[num[0..1]] << num[2]
            end
            if el % 13 == 0
                thirteen[num[0..1]] << num[2]
            end
            if el % 17 == 0
                seventeen[num[0..1]] << num[2]
            end
        end
    end


    p two
    p three
    p five
    p seven
    p eleven
    p thirteen
    p seventeen
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

pandigital