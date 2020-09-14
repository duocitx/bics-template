/**
 * Meta JS File that will be picked up by the Vue CLI
 */
module.exports = {
  /**
   * Add your own Prompt questions here!
   */
  prompts: {
    name: {
      type: 'string', // Question type
      required: true, // Is question Required
      message: 'BICS project' // Question it's self
    },
    description: {
      type: 'string',
      required: false,
      message: '',
      default: 'BICS project'
    },
    author: {
      type: 'string',
      message: 'Huu Duoc Nguyen<duocitx@gmail.com>'
    },
    extra: {
      type: 'string',
      message: 'Extra Messaging!'
    }
  },

  /**
   * You can add a custom complete message
   */
  completeMessage: 'Project Complete!'
};
