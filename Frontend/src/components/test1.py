class Solution:
    def calculateCells(self, A, B, C):
        MOD = 10**9 + 7
        dp = [0] * (A + 1)
        dp[1] = 1  # One initial cell on day 1

        for day in range(1, A + 1):
            count = dp[day]
            for new_day in range(day + C, min(day + B, A + 1), C):
                dp[new_day] = (dp[new_day] + count) % MOD

        total = 0
        for day in range(1, A + 1):
            if day + B > A:
                total = (total + dp[day]) % MOD

        return total
sol = Solution()
print(sol.calculateCells(5, 3, 2))  # Output: 2
print(sol.calculateCells(5, 5, 1))  # Output: 16