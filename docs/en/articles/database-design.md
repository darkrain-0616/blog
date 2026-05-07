# Database Design Principles

Good database design is crucial for efficient data management.

## Normalization

Normalization is the process of organizing data to minimize redundancy.

### First Normal Form (1NF)
- Eliminate repeating groups
- Create separate tables for each group

### Second Normal Form (2NF)
- Meet all requirements of 1NF
- Remove partial dependencies

### Third Normal Form (3NF)
- Meet all requirements of 2NF
- Remove transitive dependencies

## Indexing

Indexes improve query performance.

```sql
CREATE INDEX idx_users_email ON users(email);
```

## Relationships

- One-to-One
- One-to-Many
- Many-to-Many

## ER Diagrams

Entity-Relationship diagrams help visualize database structure.
