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
    
    #[j,k,l]
    
    targets = [];
    
    (0...digits.length).each do |i|
        num = digits[i];
        set = num_to_letter[num]
        if targets.length == 0
            targets = set;
        else
            targets = set_combos(set, targets)
        end
    end
    targets;
end

def set_combos(set, targets)
    arr = []
    str = ""
    (0...targets.length).each do |i|
        (0...set.length).each do |j|
            ch1 = targets[i];
            ch2 = set[j]
            str = ch1 + ch2;
            arr << str;
        end
    end
    arr
end
