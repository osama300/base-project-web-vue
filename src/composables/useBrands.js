// src/composables/useBrands.js
import { ref } from 'vue';
import axios from '../axios'; // تأكد من استيراد الـ instance

export function useBrands() {
  const brands = ref([]);
  const search = ref('');
  const showModal = ref(false);
  const newBrand = ref({
    name: '',
    slug: '',
    description: '',
    logo_id: null,
    banner_id: null,
    metadata_title: '',
    metadata_description: '',
    metadata_keywords: [],
  });
  const currentPage = ref(1);

  const fetchBrands = async () => {
    try {
      const response = await axios.get(`api/v1/brands?search=${search.value}&page=${currentPage.value}`);
      brands.value = response.data.data;
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const addBrand = async () => {
    try {
      const response = await axios.post('api/v1/brands', newBrand.value);
      brands.value.push(response.data.data);
      closeModal();
    } catch (error) {
      console.error('Error adding brand:', error);
    }
  };

  const deleteBrand = async (id) => {
    try {
      await axios.delete(`api/v1/brands/${id}`);
      brands.value = brands.value.filter(brand => brand.id !== id);
    } catch (error) {
      console.error('Error deleting brand:', error);
    }
  };

  const showAddBrandModal = () => {
    showModal.value = true;
  };

  const closeModal = () => {
    showModal.value = false;
    newBrand.value = {
      name: '',
      slug: '',
      description: '',
      logo_id: null,
      banner_id: null,
      metadata_title: '',
      metadata_description: '',
      metadata_keywords: [],
    };
  };

  return {
    brands,
    search,
    showModal,
    newBrand,
    fetchBrands,
    addBrand,
    deleteBrand,
    showAddBrandModal,
    closeModal,
  };
}
