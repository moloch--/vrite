import { ExtensionContentPieceViewContext } from "@vrite/extensions";

const initContentPieceView = async (context: ExtensionContentPieceViewContext): Promise<void> => {
  context.setTemp({
    buttonLabel: context.data.devId ? "Update" : "Publish",
    disabled:
      !context.config.apiKey || !context.config.contentGroupId || context.contentPiece.locked,
    $loading: false
  });

  if (typeof context.data.draft !== "boolean") {
    context.setData("draft", context.config.draft || false);
  }
  if (typeof context.data.autoPublish !== "boolean") {
    context.setData("autoPublish", true);
  }
};

export default initContentPieceView;
