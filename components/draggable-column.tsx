import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low" | "Scheduled";
  assignee: {
    name: string;
    avatar: string;
  };
  status: string;
  progress: number;
}

interface DraggableColumnProps {
  title: string;
  tasks: Task[];
  id: string;
}

export function DraggableColumn({ title, tasks, id }: DraggableColumnProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <Card className="bg-gray-50 p-4">
        <Droppable droppableId={id}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card className="bg-white">
                        <CardContent className="p-4">
                          <div className="mb-2 flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{task.title}</h3>
                              <p className="text-sm text-gray-500">
                                {task.description}
                              </p>
                            </div>
                            <Badge
                              variant={
                                task.priority === "High"
                                  ? "destructive"
                                  : "default"
                              }
                              className={`${
                                task.priority === "High"
                                  ? "bg-red-100 text-red-800 hover:bg-red-100"
                                  : task.priority === "Medium"
                                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                    : task.priority === "Low"
                                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                                      : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              }`}
                            >
                              {task.priority}
                            </Badge>
                          </div>
                          <div className="mt-4">
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                {task.status}
                              </span>
                              <span className="text-sm font-medium">
                                {task.progress}%
                              </span>
                            </div>
                            <Progress value={task.progress} className="h-2" />
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={task.assignee.avatar} />
                              <AvatarFallback>
                                {task.assignee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Card>
    </div>
  );
}
