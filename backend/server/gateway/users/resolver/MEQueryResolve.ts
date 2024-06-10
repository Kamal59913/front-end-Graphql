import userModel from "../../../db/models/users";

const MEQueryResolver = async (parents: unknown, args, context) => {
  try {
    if (context.user.error) {
      return {
        errors: [
          {
            message: 'Unauthorized user',
            code: 'UNAUTHORIZED USER',
          },
        ],
      };
    }
    const id = context.user._id;
    console.log(id, "we got the id")
    if (!id) return;

    const user = await userModel.findOne({ _id: id });

    return { user };
  } catch (e) {
    return {
      errors: [
        {
          message: 'Something went wrong',
          code: 'SERVER_ERROR',
        },
      ],
    };
  }
};

export default MEQueryResolver;
