times = 0

for _ in range(5):
    start, end = input().split(" ")
    start_hour, start_minute = list(map(int, start.split(":")))
    end_hour, end_minute = list(map(int, end.split(":")))
    times += 60 * (end_hour - start_hour)
    if end_minute > start_minute:
        times += end_minute - start_minute
    else:
        times -= start_minute - end_minute

print(times)
