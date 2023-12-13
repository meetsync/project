grid = [[0, 1, 0], [0, 1, 0], [0, 1, 0]]


def conwaysGame(grid):
  outputGrid = [[0] * len(grid)] * len(grid)
  for y in range(len(grid)):
    for x in range(len(grid[y])):
      print(y,x)
      neighborCount = getNeighborCount(grid, y, x)
      print(neighborCount)
      if grid[y][x] == 1 and neighborCount == 2:
       
        outputGrid[y][x] = 1
        print("if", outputGrid)
      elif neighborCount == 3:
        outputGrid[y][x] = 1
        print("elif", outputGrid)
        # print(outputGrid)
      else:
        outputGrid[y][x] = 0
        print("else", outputGrid)
      

  return outputGrid


def getNeighborCount(grid, input_y, input_x):
  count = 0
  for y in range(max(input_y - 1, 0), min(input_y + 2, len(grid))):
    for x in range(max(input_x - 1, 0), min(input_x + 2, len(grid[y]))):
      if y == input_y and x == input_x:
        continue
      if grid[y][x] == 1:
        count += 1

  return count


print(conwaysGame(grid))