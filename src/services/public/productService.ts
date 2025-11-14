import { supabaseServer } from '@/lib/supabaseServer';

export const productService = {
  getProducts: async () => {
    const { data, error } = await supabaseServer.from('products').select('*');
    if (error) throw error;
    return data;
  },
};
