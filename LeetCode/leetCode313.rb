# @param {Integer} n
# @param {Integer[]} primes
# @return {Integer}
def nth_super_ugly_number(n, primes)
    count = 0;
    #I know that I can grab the prime numbers and multiply them through the set.
    #This will generate composite numbers for me that I know will pass.
    #i need to be able to find all of the prime/composite numbers in the precise order that they appear
    #This would eliminate the redundancy of looking at ALL numbers.
    #I know there will be instances where I have to multiply a prime by itself a certain number of times.
    #How do I know that I've multiplied a number by itself enough?
    #i could keep multiplying the current number through until it generates a number that is greater than the last number..
    #then move to the next number in the set..
    #I believe its impossible for me to know exactly the next composite number to create so my list will be longer than what I need.
    #From there I would just grab the nth place in the list and return that guy.
    #Now how to create an exact list..
    #I could keep multiplying through the position I am at until it generates a number that is greater than the last position.
    #This becomes my new list
    #Then move onto the next number in the list.
    #I could use the queue system to do this.
    
    queue = primes.clone
    
    return 1 if primes.length == 0 || n == 1
    return primes[0]**(n-1) if primes.length == 1
    
    
    num1 = queue.shift
    last_digit = queue[-1]
    arr = primes.clone;
    until queue.empty? || num1.nil?
        
        (0...arr.length).each do |i|
            num2 = arr[i]
            prod = num2
            break if num2 > queue[-1]
            p "num1 before the loop #{num1}"
            while prod <= queue[-1]
                prod *= num1
                p "num1 = #{num1} num2 = #{num2} prod = #{prod}"
                arr << prod if !arr.include?(prod)
            end
        end
        arr.sort!
        queue = arr.select { |ele| ele <= primes[-1]}
        idx = arr.index(num1) + 1
        num1 = queue[idx]
        
        # if queue.empty? && 
        #     queue = arr.clone[1..-1]
        # end
    end

    arr.unshift(1)
    p arr.sort!
    p n
    p arr.length
    arr[n-1]
end

n = 70
primes = [2,3,13,17,19,37,41,43,47,53]

p nth_super_ugly_number(n, primes)