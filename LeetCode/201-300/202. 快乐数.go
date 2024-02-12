func isHappy(n int) bool {
    m := map[int]bool{}
    for n != 1 && !m[n] {
       m[n] = true
       n = step(n)
    }
    return n == 1
}

func step(n int) int {
    sum := 0
    for n != 0 {
        sum += (n%10) * (n%10)
        n /= 10
    }
    return sum
}