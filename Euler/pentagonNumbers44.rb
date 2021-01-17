# Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten pentagonal numbers are:

# 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

# It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 − 22 = 48, is not pentagonal.

# Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk − Pj| is minimised; what is the value of D?

def pentagons(n)
    
    hash = {}; #make this a hash for faster look up

    (1..n).each do |i|
        p = i * (3 * i - 1) / 2
        hash[p] = nil;
    end

    hash
end
#this function is really expensive and could use some optimizing.
#what if I stored the sums that are pentagonal numbers in a hash.
#as I grab difs that are pentagonal numbers I check to see if those difs are in the sum hash
#this would at least speed up the look up time.
def p_numbers(m)

    hash1 = pentagons(m)
    hash2 = {}

    hash1.each_key do |key|

    end
    
end

p p_numbers(1000)