# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
    arr = []    
    until nums1.empty? || nums2.empty?
        if nums1[0] < nums2[0]
            arr << nums1.shift
        else
            arr << nums2.shift
        end
    end
    
    arr += nums1 + nums2
    
    half = arr.length / 2
    
    if arr.length.even?
        return (arr[half] + arr[half-1]) * 1.0 / 2.0
    else
        return arr[half]
    end
end