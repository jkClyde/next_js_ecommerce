// schemas/imageWithColor.js
export default {
  name: 'imageWithColor',
  type: 'object',
  title: 'Image with Color',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color',
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'White', value: 'white'},
          {title: 'Blue', value: 'blue'},
          {title: 'black', value: 'black'},
          {title: 'green', value: 'green'},
          {title: 'pink', value: 'pink'},
          {title: 'yellow', value: 'yellow'},
          // Add more colors as needed
        ],
      },
    },
  ],
}
