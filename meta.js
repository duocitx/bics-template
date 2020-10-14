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
      message: 'Name' // Question it's self
    },
    short_name: {
      type: 'string', // Question type
      required: true, // Is question Required
      message: 'Short name' // Question it's self
    },
    title: {
      type: 'string', // Question type
      required: true, // Is question Required
      message: 'Title' // Question it's self
    },
    description: {
      type: 'string',
      required: false,
      message: 'description',
      default: 'BICS project'
    },
    author: {
      type: 'string',
      message: 'Author',
      default: 'Huu Duoc Nguyen<duocitx@gmail.com>'
    },
    keywords: {
      type: 'string',
      message: 'Keywords',
      default: ''
    },
    output_dir: {
      type: 'string',
      message: 'Output directory',
      default: '../wwwroot'
    }
  },

  /**
   * You can add a custom complete message
   */
  completeMessage: 'Project Complete!'
};
