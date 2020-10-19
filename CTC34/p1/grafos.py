from graphviz import Digraph
g = Digraph()
g.attr(rankdir='LR')
g.attr('node', shape='doublecircle')
g.node('1')
g.attr('node', shape='circle')
g.edge('1', '2', 'a')
g.view()