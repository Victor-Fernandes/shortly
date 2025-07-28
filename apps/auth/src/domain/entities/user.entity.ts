import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    isValidUser?: boolean;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' , name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' , name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' , name: 'deleted_at'})
    deletedAt?: Date;
}
