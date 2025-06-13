export const ItemTypes = {
  COMPONENT: 'component',
};

// Define available components
export const COMPONENTS = [
  {
    type: 'heading',
    label: 'Heading',
    properties: {
      text: 'Heading Text',
      level: 'h2',
    },
  },
  {
    type: 'paragraph',
    label: 'Paragraph',
    properties: {
      text: 'This is a paragraph of text. Edit this text to add your own content.',
    },
  },
  {
    type: 'button',
    label: 'Button',
    properties: {
      text: 'Click Me',
      variant: 'primary',
    },
  },
  {
    type: 'image',
    label: 'Image',
    properties: {
      src: 'https://via.placeholder.com/150',
      alt: 'Placeholder image',
    },
  },
  {
    type: 'form',
    label: 'Form',
    properties: {
      fields: [],
      submitText: 'Submit',
    },
  },
];