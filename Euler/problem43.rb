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
    twos = Hash.new { |h, k| h[k] = Array.new };
    threes = Hash.new { |h, k| h[k] = Array.new };
    fives = Hash.new { |h, k| h[k] = Array.new };
    sevens = Hash.new { |h, k| h[k] = Array.new };
    elevens = Hash.new { |h, k| h[k] = Array.new };
    thirteens = Hash.new { |h, k| h[k] = Array.new };
    seventeens = [];

    targets = []; #this will hold all of the arrays that make it through the entire process.

    (12..987).each do |el| #must create candidates starting with 012
        num = non_repeating(el); #num is my array.
        if num
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

    #Must refactor and add seveenteens to this to dry up the code even more
    primes = [thirteens, elevens, sevens, fives, threes, twos]
    
    t = [];

    #loop through seventeens and nest the primes array inside of it.
    #if our helper function does not return false but returns the updated t then move to next prime
    #if helper function returns false then move to the next
    (0...seventeens.length).each do |idx17|
        seventeen = seventeens[idx17]
        f13 = thirteens[seventeen[0..1]]
        t += seventeen
        (0...primes.length).each do |i|
            p = primes[i] #my hash of arrays
            if i == 0 #I know that I'm looking at my thirteens hash
                if p.has_key?(f13)
                    #I want to be able to lop
                var = next_digit(t, )
            else

            end
        end
        t = [];
    end


    # p thirteens
    # p seventeens
end
#takes in the target array, 
def next_digit(t, )

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

# threes[f3].each do |l3|
#     if t.length == 3 && !t.include?(l3)
#         t << l3
#         f5 = t[-2..-1]
#         fives[f5].each do |l5|
#             if t.length == 4 && !t.include?(l5)
#                 t << l5
#                 f7 = t[-2..-1]
#                 sevens[f7].each do |l7|
#                     if t.length == 5 && !t.include?(l7)
#                         t << l7
#                         f11 = t[-2..-1]
#                         elevens[f11].each do |l11|
#                             if t.length == 6 && !t.include?(l11)
#                                 t << l11
#                                 f13 = t[-2..-1]
#                                 thirteens[f13].each do |l13|
#                                     if t.length == 7 && !t.include?(l13)
#                                         t << l13
#                                         f17 = t[-2..-1]
#                                         seventeens[f17].each do |l17|
#                                             if t.length == 8 && !t.include?(l17)
#                                                 t << l17
#                                                 digits = [0,1,2,3,4,5,6,7,8,9]
#                                                 digits.each do |d|
#                                                     if !t.include?(d)
#                                                         t.unshift(d)
#                                                     end
#                                                 end
#                                                 targets << t
#                                             end
#                                         end
#                                     end
#                                 end
#                             end
#                         end
#                     end
#                 end
#             end
#         end
#     end
# end