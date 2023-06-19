class BinaryTreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BuildFunctions:
    def buildBinaryTreeFromArray(array):
        # Creating two queues
        #  1. array - input with values
        #  2. queue - contains previous level nodes (parents) so we can add to it

        # BFS to create tree from array
        queue = []
        parent = None
        root = None

        # We'll pop values off array until we have none left
        while (len(array) > 0):

            # Root won't have a parent, so set it as parent and return
            if (not parent):

                parent = BinaryTreeNode(array.pop(0))
                queue.append(parent)
                root = parent


            # Evaluate queue to add new nodes
            qLen = len(queue)
            for i in range(0, qLen*2, 2): # (var i = 0; i < qLen*2; i+=2):
                # Sometimes we don't have a complete final row, so quit early if no values left
                if (len(array) == 0):
                    break


                # Parent can't be None, so pop off until we find one with a value
                parent = queue.pop()
                while (parent == None):
                    parent = queue.pop()
                    i += 1


                # next two values are the children, so pop them off and add to parent
                left = array.pop(0)
                right = array.pop(0)
                parent.left = BinaryTreeNode(left) if (left != None) else None
                parent.right = BinaryTreeNode(right) if (right != None) else None

                queue.insert(0, parent.left)
                queue.insert(0, parent.right)



        return root

