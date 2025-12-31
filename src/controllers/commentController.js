let comments = [];

exports.getComments = (req, res) => {
  res.json(comments);
};

exports.addComment = (req, res) => {
  const { postId, text } = req.body;

  const comment = {
    id: Date.now(),
    postId,
    text,
    user: req.user.email,
  };

  comments.push(comment);
  res.status(201).json(comment);
};

exports.deleteComment = (req, res) => {
  comments = comments.filter(c => c.id != req.params.id);
  res.json({ message: "Comment deleted" });
};
