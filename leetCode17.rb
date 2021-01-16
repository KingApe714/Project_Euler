def letter_combinations(digits)
    num_to_letter = {
        "" => [],
        "2" => ["a", "b", "c"],
        "3" => ["d", "e", "f"],
        "4" => ["g", "h", "i"],
        "5" => ["j", "k", "l"],
        "6" => ["m", "n", "o"],
        "7" => ["p", "q", "r", "s"],
        "8" => ["t", "u", "v"],
        "9" => ["w", "x", "y", "z"]
    };
    
    #[a,b,c]
    
    #[d,e,f]
    
    #[g,h,i]
    
    return num_to_letter[digits] if digits.length <= 1
    
    arr = [];
    targets = [];
    (0...digits.length).each do |i|
        ch = digits[i];
        arr << num_to_letter[ch]
    end
    #
    until arr.empty?
        set1 = arr.shift #this will give me the set that I want to compare to all other sets
        (0...arr.length).each do |i|
            set2 = arr[i];

            targets += set_combos(set1, set2)
        end
    end
    targets;
end

def set_combos(arr1, arr2) #I could use the splat operator on this function to take in any number of sets..
    arr = []
    str = ""
    (0...arr1.length).each do |i|
        ch1 = arr1[i]
        (0...arr2.length).each do |j|
            ch2 = arr2[j]
            str = ch1 + ch2
            arr << str
        end
    end
    arr
end