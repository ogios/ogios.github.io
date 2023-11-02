<script lang="ts" setup>
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";
import {reactive} from "vue";
import {Editor} from "@tiptap/vue-3";

const props = defineProps<{ editor: Editor }>();
const show = () => {
}
const buttons = reactive([]);

const openChange = (visible: boolean) => {
  // console.log("change");
  if (!visible) return;
  // console.log("loading...")
  buttons.splice(0, buttons.length);
  const c = [
    {
      icon: "table-line",
      title: "插入表",
      action: () => props.editor.chain().focus().insertTable({rows: 3, cols: 3, withHeaderRow: true}).run(),
      disabled: undefined,
    },
    {
      icon: "insert-column-left",
      title: "添加列( 之前 )",
      action: () => props.editor.chain().focus().addColumnBefore().run(),
      disabled: !props.editor.can().addColumnBefore(),
    },
    {
      icon: "insert-column-right",
      title: "添加列( 之后 )",
      action: () => props.editor.chain().focus().addColumnAfter().run(),
      disabled: !props.editor.can().addColumnAfter(),
    },
    {
      icon: "delete-column",
      title: "删除列",
      action: () => props.editor.chain().focus().deleteColumn().run(),
      disabled: !props.editor.can().deleteColumn(),
    },
    {
      icon: "insert-row-top",
      title: "添加行( 之前 )",
      action: () => props.editor.chain().focus().addRowBefore().run(),
      disabled: !props.editor.can().addRowBefore(),
    },
    {
      icon: "insert-row-bottom",
      title: "添加行( 之后 )",
      action: () => props.editor.chain().focus().addRowAfter().run(),
      disabled: !props.editor.can().addRowAfter(),
    },
    {
      icon: "delete-row",
      title: "删除行",
      action: () => props.editor.chain().focus().deleteRow().run(),
      disabled: !props.editor.can().deleteRow(),
    },
    {
      icon: "delete-bin-line",
      title: "删除表",
      action: () => props.editor.chain().focus().deleteTable().run(),
      disabled: !props.editor.can().deleteTable(),
    },
    {
      icon: "merge-cells-horizontal",
      title: "合并单元格",
      action: () => props.editor.chain().focus().mergeCells().run(),
      disabled: !props.editor.can().mergeCells(),
    },
    {
      icon: "split-cells-horizontal",
      title: "分裂单元格",
      action: () => props.editor.chain().focus().splitCell().run(),
      disabled: !props.editor.can().splitCell(),
    },
    {
      icon: "layout-column-fill",
      title: "开关头列表",
      action: () => props.editor.chain().focus().toggleHeaderColumn().run(),
      disabled: !props.editor.can().toggleHeaderColumn(),
    },
    {
      icon: "layout-row-fill",
      title: "开关头行",
      action: () => props.editor.chain().focus().toggleHeaderRow().run(),
      disabled: !props.editor.can().toggleHeaderRow(),
    },
    {
      icon: "layout-bottom-2-line",
      title: "开关头单元格",
      action: () => props.editor.chain().focus().toggleHeaderCell().run(),
      disabled: !props.editor.can().toggleHeaderCell(),
    },
    {
      icon: "projector-line",
      title: "合并/分裂",
      action: () => props.editor.chain().focus().mergeOrSplit().run(),
      disabled: !props.editor.can().mergeOrSplit(),
    },
  ]
  for (const index in c) buttons.push(c[index]);
}

const title = "Table control";
</script>

<script lang="ts">
</script>

<template>
  <div v-if="editor">
    <a-popover placement="bottom" :title="title" trigger="hover" @open-change="openChange" style="z-index: 999999">
      <button class="menu-item" @click="show">
        <svg class="remix">
          <use :xlink:href="`${remixiconUrl}#ri-table-fill`"/>
        </svg>
      </button>

      <template #content>
        <div class="table-control" style="max-width: 200px">
          <a-tooltip v-for="val in buttons" placement="bottom">
            <template #title>
              <span>{{ val.title }}</span>
            </template>
            <button :disabled="val.disabled" class="menu-item" @click="val.action">
              <svg class="remix">
                <use :xlink:href="`${remixiconUrl}#ri-${val.icon}`"/>
              </svg>
            </button>
          </a-tooltip>


<!--          <button @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
            insertTable
          </button>
          <button :disabled="!editor.can().addColumnBefore()" @click="editor.chain().focus().addColumnBefore().run()">
            addColumnBefore
          </button>
          <button :disabled="!editor.can().addColumnAfter()" @click="editor.chain().focus().addColumnAfter().run()">
            addColumnAfter
          </button>
          <button :disabled="!editor.can().deleteColumn()" @click="editor.chain().focus().deleteColumn().run()">
            deleteColumn
          </button>
          <button :disabled="!editor.can().addRowBefore()" @click="editor.chain().focus().addRowBefore().run()">
            addRowBefore
          </button>
          <button :disabled="!editor.can().addRowAfter()" @click="editor.chain().focus().addRowAfter().run()">
            addRowAfter
          </button>
          <button :disabled="!editor.can().deleteRow()" @click="editor.chain().focus().deleteRow().run()">
            deleteRow
          </button>
          <button :disabled="!editor.can().deleteTable()" @click="editor.chain().focus().deleteTable().run()">
            deleteTable
          </button>
          <button :disabled="!editor.can().mergeCells()" @click="editor.chain().focus().mergeCells().run()">
            mergeCells
          </button>
          <button :disabled="!editor.can().splitCell()" @click="editor.chain().focus().splitCell().run()">
            splitCell
          </button>
          <button :disabled="!editor.can().toggleHeaderColumn()"
                  @click="editor.chain().focus().toggleHeaderColumn().run()">
            toggleHeaderColumn
          </button>
          <button :disabled="!editor.can().toggleHeaderRow()" @click="editor.chain().focus().toggleHeaderRow().run()">
            toggleHeaderRow
          </button>
          <button :disabled="!editor.can().toggleHeaderCell()" @click="editor.chain().focus().toggleHeaderCell().run()">
            toggleHeaderCell
          </button>
          <button :disabled="!editor.can().mergeOrSplit()" @click="editor.chain().focus().mergeOrSplit().run()">
            mergeOrSplit
          </button>-->


          <!--          <button :disabled="!editor.can().setCellAttribute('backgroundColor', '#FAF594')"-->
          <!--                  @click="editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()">-->
          <!--            setCellAttribute-->
          <!--          </button>-->
          <!--          <button :disabled="!editor.can().fixTables()" @click="editor.chain().focus().fixTables().run()">-->
          <!--            fixTables-->
          <!--          </button>-->
          <!--          <button :disabled="!editor.can().goToNextCell()" @click="editor.chain().focus().goToNextCell().run()">-->
          <!--            goToNextCell-->
          <!--          </button>-->
          <!--          <button :disabled="!editor.can().goToPreviousCell()" @click="editor.chain().focus().goToPreviousCell().run()">-->
          <!--            goToPreviousCell-->
          <!--          </button>-->

        </div>
      </template>
    </a-popover>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  background: black;
  border: none;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  height: 1.75rem;
  padding: 0.25rem;
  margin-right: 0.25rem;
  width: 1.75rem;
  transition: 0.2s;

  svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  &.is-active,
  &:hover {
    background-color: #303030;
  }
}
</style>