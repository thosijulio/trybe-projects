def find_duplicate(nums):
    if not nums or type(nums) != list:
        return False

    nums.sort()
    repeated_number = False

    for num in nums:
        if type(num) != int or num <= 0:
            return False
        if nums.count(num) > 1 and repeated_number in [num, False]:
            repeated_number = num

    return repeated_number
