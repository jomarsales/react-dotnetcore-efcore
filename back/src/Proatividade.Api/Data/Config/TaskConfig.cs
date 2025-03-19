using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Proatividade.Api.Data.Config
{
    public class TaskConfig : IEntityTypeConfiguration<Models.Task>
    {
        public void Configure(EntityTypeBuilder<Models.Task> builder)
        {
            builder.HasKey(x =>x.Id);
            
            builder.Property(p => p.Title)
            .IsRequired(false) 
            .HasMaxLength(100);
                    
            builder.Property(p => p.Description)
            .IsRequired(false) 
            .HasMaxLength(300);

            builder.Property(p => p.Priority)
            .HasConversion<int>();
        }
    }
}