import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Post from '@/components/Post.vue'

const post = {
  "_id": "6099b4b3e2fa6217e2cc5eda",
  "index": 0,
  "likes": 393,
  "name": "Terry Rosa",
  "address": "Chautauqua, Saudi Arabia",
  "date": "Sat Jan 12 2019 12:15:34 GMT-0600 (Central Standard Time)",
  "latitude": -25.99856,
  "longitude": -98.363051,
  "likedBy": [
    30,
    13,
    19,
    30,
    20,
    28,
    27,
    17,
    26
  ],
  "text": "Pariatur ipsum culpa tempor in culpa exercitation culpa eu cillum. Elit nostrud laboris commodo consequat proident enim incididunt in consequat proident amet nulla adipisicing ex. Aliquip voluptate eu esse reprehenderit. Commodo velit ad et anim id ad eiusmod sit Lorem. Ea esse nisi qui est excepteur esse incididunt qui aliqua. Tempor enim in ut ullamco non ut amet sint pariatur commodo voluptate ex et pariatur.\r\n",
  "tags": [
    "voluptate",
    "eu",
    "mollit",
    "cillum",
    "est",
    "do",
    "ad",
    "ad",
    "dolor",
    "ut",
    "elit",
    "et",
    "nostrud",
    "veniam"
  ],
  "media": [
    {
      "id": 0,
      "title": "laboris nostrud minim",
      "src": "http://localhost:8000/posts/img-4.jpg"
    },
    {
      "id": 1,
      "title": "adipisicing ea ea",
      "src": "http://localhost:8000/posts/img-7.jpg"
    }
  ]
};

describe('Post.vue', () => {
  const wrapper = shallowMount(Post, {
    propsData: {
      post: post
    }
  })

  it('Renders post.text when data is passed.', () => {
    // console.log(wrapper.text());
    expect(wrapper.text()).to.include(post.text);
  })

  it('Data needs to be a function. ', () => {
    expect(Post.data).to.be.a('function');
  });

  it('Testing initial data. ', () => {
    expect(wrapper.vm.likes).to.equals(0);
  });

  it('Testing increment function on button click.', () => {
    expect(wrapper.vm.likes).to.equals(0);
    const button = wrapper.find('a.like');
    button.trigger('click');
    expect(wrapper.vm.likes).to.equals(1);
  })
})
