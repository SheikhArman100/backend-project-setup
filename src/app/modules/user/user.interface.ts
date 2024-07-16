export type IUser = {
  firstName:string,
  lastName:string,
  email: string,
  phoneNumber: string;
  password:string,
  isActive:boolean
  image: {
    // diskType: DiskTypeEnum;
    path: string;
    originalName: string;
    modifiedName: string;
  };
  
};
