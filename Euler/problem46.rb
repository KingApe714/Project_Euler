# It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

# 9 = 7 + 2×1^2
# 15 = 7 + 2×2^2
# 21 = 3 + 2×3^2
# 25 = 7 + 2×3^2
# 27 = 19 + 2×2^2
# 33 = 31 + 2×1^2

# It turns out that the conjecture was false.

# What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

require 'prime'

def conjecture
    arr = []
    (4_700_001..5_000_000).step(2) do |n|
        unless n.prime?
            arr << n
        end
    end
    Prime.each do |num|
        arr.each do |el|
            if (el - (2 * num ^ 2)).prime?
                arr.delete(el)
            end
        end
        p arr
    end
    # p arr
end

conjecture