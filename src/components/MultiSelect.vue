<template>
  <Multiselect
    style="margin-bottom: 10px"
    v-model="value"
    mode="tags"
    placeholder="Select Members"
    trackBy="name"
    label="name"
    :search="true"
    :options="[
      {
        value: 'judy',
        name: 'Judy',
        image: 'https://randomuser.me/api/portraits/med/women/1.jpg',
      },
      {
        value: 'jane',
        name: 'Jane',
        image: 'https://randomuser.me/api/portraits/med/women/2.jpg',
      },
      {
        value: 'john',
        name: 'John',
        image: 'https://randomuser.me/api/portraits/med/men/1.jpg',
      },
      {
        value: 'joe',
        name: 'Joe',
        image: 'https://randomuser.me/api/portraits/med/men/2.jpg',
      },
    ]"
  >
    <template v-slot:tag="{ option, handleTagRemove, disabled }">
      <div class="multiselect-tag is-user">
        <img :src="option.image" />
        {{ option.name }}
        <i
          v-if="!disabled"
          @click.prevent
          @mousedown.prevent.stop="handleTagRemove(option, $event)"
        />
      </div>
    </template>
  </Multiselect>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  name: "MultiSelect",
  components: {
    Multiselect,
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
.multiselect-tag.is-user {
  padding: 3px 8px;
  border-radius: 22px;
  background: #dcdcdc;
  color: #505050;
  font-size: 15px;
  font-weight: 700;
  margin: 3px 3px 8px;
  border: 2px solid #d0d0d0;
}
.multiselect-tag.is-user img {
  width: 35px;
  border-radius: 50%;
  height: 35px;
  margin-right: 8px;
  border: 1px solid #ffffffbf;
}
.multiselect-tag.is-user i:before {
  color: #505050;
  border-radius: 50%;
}
</style>