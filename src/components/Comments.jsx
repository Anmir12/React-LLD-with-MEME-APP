import React from "react";

const Comments = ({ comments }) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      {comments &&
        comments.map((comment) => {
          return (
            <div key={comment?.id} className="flex flex-col group">
              <div className="flex items-start gap-3 p-3 bg-white hover:bg-gray-50 rounded-lg border border-gray-100 shadow-sm transition-colors">
                <div className="flex-shrink-0">
                  <img
                    src="https://preview.redd.it/snoovatar/avatars/984fdbe7-05e7-4569-b73e-1af8199e781a-headshot.png?width=48&height=48&crop=smart&auto=webp&s=804748094a35d8d896341af12685dccb0ac6bb1a"
                    alt="user-avatar"
                    className="w-9 h-9 rounded-full bg-gray-200"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-xs text-blue-600 hover:underline cursor-pointer">
                    @{comment?.username}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed mt-0.5">
                    {comment?.text}
                  </p>
                </div>
              </div>

              {/* Recursive Replies - Styled with a Thread Line */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="ml-6 border-l-2 border-gray-200 pl-4 mt-1 transition-all">
                  <Comments comments={comment.replies} />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Comments;