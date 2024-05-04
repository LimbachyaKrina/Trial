class Main{
    public static void main(String[] args) {
      int height[] = {1,1};
      int maxArea = 0;
      int left = 0;
      int right = height.length - 1;
      
      for(int i = 0; i < height.length-1; i ++){
        for(int j = i+1; j < height.length; j ++){
          if(height[i] < height[j]){
            int value = height[i] * height[i];
            if(value > maxArea){
              maxArea = value;
            }
          }else{
            int value = height[j] * height[j];
            if(value > maxArea){
              maxArea = value;
            }
          }
        }
      }
      System.out.println(maxArea);
}
}



