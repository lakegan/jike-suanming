# Chinese Hour Conversion Module

# Mapping of Chinese hours (时辰) to Heavenly Stems and Earthly Branches
# Each Chinese hour corresponds to one of the 12 Earthly Branches

heavenly_stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]
earthly_branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]

# Time conversion function

def convert_chinese_hour(hour_number):
    if hour_number < 1 or hour_number > 12:
        return "Invalid hour number. Please use 1-12."
    else:
        earthly_branch = earthly_branches[hour_number - 1]
        heavenly_stem = heavenly_stems[hour_number % 10]
        return (heavenly_stem, earthly_branch)

# Example Usage:
# result = convert_chinese_hour(3)
# print(result)  # Output: ('丙', '寅')
