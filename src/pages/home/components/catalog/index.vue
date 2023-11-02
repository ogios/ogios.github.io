<template>
  <node-view-wrapper class="toc">
    <ul class="toc__list">
      <li
          class="toc__item"
          :class="`toc__item--${heading.level}`"
          v-for="(heading, index) in headings"
          :key="index"
      >
<!--        <a :href="`#${heading.id}`">-->
        <a @click="gotoHeading(heading.id)">
<!--          {{ heading.text }}-->
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </node-view-wrapper>
</template>

<script setup lang="ts">
import {nextTick} from "vue";

const gotoHeading = (id: string, e) => {
  console.log(e)
  nextTick(() => {
    console.log(id)
    if (id){
      let target = document.querySelector(`#${id}`);
      console.log(target)
      if (target){
        console.log("scrolling...")
        target.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      }
    }
  })
  return false;
}
</script>

<script lang="ts">
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'

export default {
  components: {
    NodeViewWrapper,
  },

  props: nodeViewProps,

  data() {
    return {
      headings: [],
    }
  },

  methods: {
    handleUpdate() {
      const headings = []
      const transaction = this.editor.state.tr

      this.editor.state.doc.descendants((node, pos) => {
        if (node.type.name === 'heading') {
          const id = `heading-${headings.length + 1}`

          if (node.attrs.id !== id) {
            transaction.setNodeMarkup(pos, undefined, {
              ...node.attrs,
              id,
            })
          }

          headings.push({
            level: node.attrs.level,
            text: node.textContent,
            id,
          })
        }
      })

      transaction.setMeta('addToHistory', false)
      transaction.setMeta('preventUpdate', true)

      this.editor.view.dispatch(transaction)

      this.headings = headings
    },
  },

  mounted() {
    this.editor.on('update', this.handleUpdate)
    this.$nextTick(this.handleUpdate)
  },
}
</script>

<style lang="scss">
/* Basic editor styles */
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }
}
</style>

<style lang="scss">
.toc {
  opacity: 0.75;
  border-radius: 0.5rem;
  padding: 0.75rem;
  background: rgba(black, 0.1);

  &__list {
    list-style: none;
    padding: 0;

    &::before {
      display: block;
      content: "Table of Contents";
      font-weight: 700;
      letter-spacing: 0.025rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      opacity: 0.5;
    }
  }

  &__item {
    a:hover {
      opacity: 0.5;
    }

    &--3 {
      padding-left: 1rem;
    }

    &--4 {
      padding-left: 2rem;
    }

    &--5 {
      padding-left: 3rem;
    }

    &--6 {
      padding-left: 4rem;
    }
  }
}
</style>