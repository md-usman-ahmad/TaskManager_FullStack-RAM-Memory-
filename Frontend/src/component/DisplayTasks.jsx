import { useState } from "react";

export function DisplayTasks() {
  const [IsEditing, setIsEditing] = useState(false);

  return (
    <>
      <div class="flex border border-gray-700 rounded-lg p-4 bg-stone-800 shadow-sm mt-5 w-1/2 mx-auto">
        <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
          <span class="text-cyan-400 text-lg">⚡</span>
        </div>
        <div class="flex  justify-between pl-3">
          <div class="flex-1 w-[400px]">
            {IsEditing ? (
              <>
                <input
                  type="text"
                  class="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-1 mb-2 text-sm"
                  placeholder="Edit Title"
                  defaultValue="Edit Title"
                />
                <input
                  type="text"
                  class="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-1 text-sm"
                  placeholder="Edit Description"
                  defaultValue="Edit Description"
                />
              </>
            ) : (
              <>
                <div class="task-content">
                  <h6 class="font-semibold text-white mb-1">
                    Server Optimization
                  </h6>
                  <hr class="my-1 border-gray-600" />
                  <p class="text-gray-300 text-sm break-words">
                    Optimize server performance and reduce response times for
                    better user experience.
                  </p>
                </div>
              </>
            )}
          </div>

          <div class="flex flex-col text-right ml-4">
            <small class="text-gray-400 text-xs whitespace-nowrap">
              createdAt - 2024-01-15 16:20:00
            </small>
            <small class="text-gray-400 text-xs whitespace-nowrap">
              updatedAt - 2024-01-15 18:10:00
            </small>
          </div>

          <div class="ml-4">
            <div class="action-buttons">
              {IsEditing ? (
                <>
                  <button class="save-btn border border-green-400 text-green-400 hover:bg-green-900 px-3 py-1 rounded text-sm mr-2"
                  onClick={()=>{setIsEditing(false)}}
                  >
                    Save
                  </button>
                  <button class="cancel-btn border border-gray-400 text-gray-400 hover:bg-gray-700 px-3 py-1 rounded text-sm"
                  onClick={()=>{setIsEditing(false)}}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button class="edit-btn border border-cyan-400 text-cyan-400 hover:bg-cyan-900 px-3 py-1 rounded text-sm mr-2"
                  onClick={()=>{setIsEditing(true)}}
                  >
                    Edit
                  </button>
                  <button class="delete-btn border border-red-400 text-red-400 hover:bg-red-900 px-3 py-1 rounded text-sm">
                    Delete
                  </button>
                </>
              )}
            </div>
            <div class="save-buttons hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
}
