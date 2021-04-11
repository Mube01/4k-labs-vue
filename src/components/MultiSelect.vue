<template>
  <div>
    <Multiselect
      v-model="value"
      mode="tags"
      placeholder="Select members"
      trackBy="username"
      label="username"
      :search="true"
      :options="allMembers"
    >
      <template v-slot:tag="{ option, handleTagRemove, disabled }">
        <div class="multiselect-tag is-user">
          <ProfilePicture
            imgWeight="35px"
            fontSize="15px"
            :name="option.username[0]"
            :srcText="option['profile_picture']"
          />
          <span>{{ option.username }}</span>
          <i
            v-if="!disabled"
            @click.prevent
            @mousedown.prevent.stop="handleTagRemove(option, $event)"
          />
        </div>
      </template>
    </Multiselect>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import ProfilePicture from "./ProfilePicture";
export default {
  name: "MultiSelect",
  components: {
    Multiselect,
    ProfilePicture,
  },
  props: {
    allMembers: Object,
    memberIds: Array,
  },
  data() {
    return {
      value: this.memberIds || [],
    };
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
.multiselect-tag.is-user {
  padding: 3px 8px;
  border-radius: 22px;
  background: #f2f2f2;
  color: #505050;
  font-size: 15px;
  font-weight: 700;
  margin: 3px 3px 8px;
  border: 1px solid #d0d0d0;
}
.multiselect-tag.is-user img {
  width: 35px;
  border-radius: 50%;
  height: 35px;
  margin-right: 8px;
  border: 1px solid #ffffffbf;
}
span {
  margin-left: 10px;
}
.multiselect-tag.is-user i:before {
  color: #505050;
  border-radius: 50%;
}
</style>