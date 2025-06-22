graph = { '1' : ['2' , '5'] ,
          '2' : ['1' , '3', '5'] ,
          '3' : ['2' , '4'] ,
          '4' : ['3' , '5', '6'] ,
          '5' : ['1' , '2', '4'] ,
          '6' : ['4']
      }
   
 
def ParcoursProfRec ( graph , node , visited = None ):
 
    # Initialiser les sommets visités
    if visited is None :
       visited = []
   
    # Marquer le sommet comme visiter
    if node not in visited :
      visited.append(node)
 
    # Définir les voisin de sommetou bien node
    unvisited = [ n for n in graph[node] if n not in visited ]
   
    # Parcourir les voisins de sommet
    for node in unvisited :
       ParcoursProfRec ( graph , node , visited ) # la fonction récursif
    return visited
 
print(ParcoursProfRec(graph, '3'))