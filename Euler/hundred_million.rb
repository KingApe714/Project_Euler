require "prime"

#Consider the divisors of 30: 1,2,3,5,6,10,15,30. It can be seen that for every divisor d of 30, d+30/d is prime. Find the sum of all positive integers n not exceeding 100,000,000 such that for every divisor d of n, d+n/d is prime.

def sum_of_all_two(num)
  sum = 0
  Prime.each(num) do |p|
    n = p - 1 #the number I'm going to run divisors tests on
    last_digit = n % 10

    if div_check(n, 2) && last_digit != 4 && last_digit != 6 && Math.sqrt(n) % 1 != 0

      if n != 2 && divisors(n)
        sum += n
      end

    end
  end
  sum + 9 #9 accounts for 1,2,6 that pass the test and we discard with square check && last_digit 
end

def divisors(num)
  divs, exps = Prime.prime_division(num).transpose

  return false if divs.length > 5

  divs = divs.select { |ele| ele <= Math.sqrt(num)}

  return false if exps.none? { |exp| exp == 1} #ensure square free
    
  div1 = divs.shift
  arr = divs.dup
  count = 0

  divs.each do |p| #ensure prime divs pass test
    count += 1
    unless div_check(num, p)
      return false
    end
  end

  until divs.empty? #implement the queue method to generate the composite factors

    divs.each do |div2|
      count += 1
      product = div1 * div2
      next if product > Math.sqrt(num)
      if num % product == 0 && !divs.include?(product)
        if div_check(num, product)
          divs << product
          arr << product
        else
          return false
        end
      end

    end

    div1 = divs.shift
  end

  p "#{num} count = #{count} arr =#{arr.sort}"
  #p num
  true
end

def div_check(num, d)
  ((num/d) + d).prime?
end

#naive divisor generator
def divisors_two(num) 
  arr = []
  primes, exponents = Prime.prime_division(num).transpose

  if exponents.none? { |exp| exp == 1}
    return false
  end

  count = 0
  (3..Math.sqrt(num).floor).each do |d|
    count += 1
    if num % d == 0
      if div_check(num, d)
        arr << d
      else
        return false
      end
    end
  end
  p "#{num} count = #{count} arr =#{arr}"
  true
end

p sum_of_all_two(100_000_000)


#30
#1,2,3,5,6,10,15,30

#30/1 + 1 = 31
#30/2 + 2 = 17
#30/3 + 3 = 13
#30/5 + 5 = 11
#30/6 + 6 = 11
#30/10 + 10 = 13
#30/15 + 15 = 17
#30/30 + 30 = 31

#2,3,5
#6,10
#3,5,6,10
#15,30

#sieve of erotastonese
#100
#