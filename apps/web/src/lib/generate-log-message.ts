import {
    Action, AuditLog,
} from "@/graphql/graphql";


export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType, entityData } = log;

  switch (action) {
    case Action.Create:
      return `created ${entityType.toLowerCase()} "${entityTitle}"`;
    case Action.Rate:
      return `You marked "${entityTitle}" as ${entityData}`;
    case Action.Update:
      return `You marked "${entityTitle}" as ${entityData}`;
    default:
      return `unknown action ${entityType.toLowerCase()} "${entityTitle}"`;
  };
};
