graph = {
  '1': ['2', '5'],
  '2': ['1', '3', '5'],
  '3': ['2', '4'],
  '4': ['3', '5', '6'],
  '5': ['1', '2', '4'],
  '6': ['4']
}

def dfs(graph,start,visited=None):
 if visited is None:
  visited = []
 if start not in visited:
   visited.append(start)

 unvisited = [st for st in graph[start] if start not in visited]

 for node in unvisited:
  dfs(graph,node,visited)
 return visited

print(dfs(graph,'1')) 
