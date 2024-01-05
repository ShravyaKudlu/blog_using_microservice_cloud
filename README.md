Part 3:

Implementation of a new feature for my tweet Clone App

This feature is to simply check if the content of the service contains the word 'Orange' then rejects the comment and doesnt display the comment else it needs to approve the comment.

While implementing this there can be 3 states the service might face
1. The comment is approved and the contents should be displayed
2. The comment is rejected and the contents should be rejected and a message should be displayed to used that their comment is rejected
3. The comment is in processing stage where we still figuring out if the content has the word orange.
-> This sinario is simple since we are only filtering a word orange and the output of this would be in milliseconds
->The senario in which maybe we use an actual human to filter a comment it may take hours or days to produce output and hence we mayneed to display the user the comment is in await state.

![Alt New Feature Look](img/NewFeatureLook.png)
![Alt New Feature Look2](img/Picture2NewFeature.png)

There are 3 approaches I thought to solve this problem.




