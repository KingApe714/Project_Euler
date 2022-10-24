const insert = (intervals, newInterval) => {
    let [start, end] = newInterval;
    let left = [];
    let right = [];
    
    for (let interval of intervals) {
        let [a, b] = interval;
        
        if (b < start) {
            left.push(interval)
        } else if (a > end) {
            right.push(interval)
        } else {
            start = Math.min(start, a);
            end = Math.max(end, b);
        }
    }
    return left.concat([ [start, end] ], right)
};

const merge = intervals => {
    intervals.sort((a, b) => a[0] - b[0])
    let merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let [a, b] = merged[merged.length - 1];
        let [c, d] = intervals[i];
        
        if (c <= b) {
            merged[merged.length - 1] = [a, Math.max(b, d)];
        } else {
            merged.push([c, d])
        }
    }
    
    return merged;
};